package controllers

import (
	entities "bdx3/Entities"
	models "bdx3/Models"
	"bdx3/database"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/now"
)

func ShowAllSpends(c *gin.Context) {
	db := database.GetDatabase()
	var p []models.Spend
	err := db.Find(&p).Error

	if err != nil {
		c.JSON(400, gin.H{
			"error": "cannot find product by id: " + err.Error(),
		})
		return
	}

	c.JSON(200, p)
}

func ShowAUserSpends(c *gin.Context) {
	db := database.GetDatabase()

	var spend []models.Spend
	var userId entities.GetUserById

	if name := c.BindJSON(&userId); name != nil {
		c.JSON(400, gin.H{
			"ERROR": "ERRO TO GET DATA",
		})
		return
	}

	err := db.Find(&spend, "user_id = ? AND created_at >= ?", userId.ID, now.BeginningOfMonth()).Error

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "SPEND NOT FOUND: " + err.Error(),
		})
		return
	}

	c.JSON(200, &spend)
}

func ShowSpend(ginContext *gin.Context) {

	db := database.GetDatabase()

	var spend models.Spend
	var name entities.GetUserByName

	if name := ginContext.BindJSON(&name); name != nil {
		ginContext.JSON(400, gin.H{
			"ERROR": "ERRO TO GET DATA",
		})
		return
	}

	err := db.Find(&spend, "name = ?", name.Name).Error

	if err != nil {
		ginContext.JSON(400, gin.H{
			"ERROR": "SPEND NOT FOUND: " + err.Error(),
		})
		return
	}

	ginContext.JSON(200, &spend)

}

func CreateSpend(c *gin.Context) {
	db := database.GetDatabase()

	var spend models.Spend

	err := c.ShouldBindJSON(&spend)

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "ERROR TO BIND JSON: " + err.Error(),
		})

		return
	}

	err = db.Create(&spend).Error

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "ERROR TO CREATE USER:" + err.Error(),
		})

		return
	}

	c.JSON(200, spend)
}

func EditSpend(c *gin.Context) {
	db := database.GetDatabase()

	var p models.Spend

	err := c.ShouldBindJSON(&p)
	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "cannot bind JSON: " + err.Error(),
		})
		return
	}

	err = db.Save(&p).Error
	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "CANNOT EDIT USER: " + err.Error(),
		})
		return
	}

	c.JSON(200, p)
}

func DeleteSpend(c *gin.Context) {
	id := c.Param("id")
	convertId, err := strconv.Atoi(id)

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "ID DONT A INTEGER",
		})
		return
	}

	db := database.GetDatabase()

	err = db.Delete(&models.Spend{}, convertId).Error

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "CANNOT DELETE USER: " + err.Error(),
		})
		return
	}

	c.Status(204)
}
