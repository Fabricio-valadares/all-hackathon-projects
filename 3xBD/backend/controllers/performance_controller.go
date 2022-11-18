package controllers

import (
	entities "bdx3/Entities"
	models "bdx3/Models"
	"bdx3/database"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/now"
)

// func ShowPerformance(ginContext *gin.Context) {

// 	db := database.GetDatabase()

// 	var performance models.Performance
// 	var name models.Login

// 	if nickname := ginContext.BindJSON(&name); nickname != nil {
// 		ginContext.JSON(400, gin.H{
// 			"ERROR": "ERRO TO GET DATA",
// 		})
// 		return
// 	}

// 	err := db.Find(&performance, "nickname = ?", name.Nickname).Error

// 	if err != nil {
// 		ginContext.JSON(400, gin.H{
// 			"ERROR": "PERFORMANCE NOT FOUND: " + err.Error(),
// 		})
// 		return
// 	}

// 	ginContext.JSON(200, &performance)

// }

func ShowAUserPerformance(c *gin.Context) {
	db := database.GetDatabase()

	var spend []models.Performance
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
			"ERROR": "PERFORMANCE NOT FOUND: " + err.Error(),
		})
		return
	}

	c.JSON(200, &spend)
}

func CreatePerformance(c *gin.Context) {
	db := database.GetDatabase()

	var performance models.Performance

	err := c.ShouldBindJSON(&performance)

	fmt.Print(&performance)

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "ERROR TO BIND JSON: " + err.Error(),
		})

		return
	}

	err = db.Create(&performance).Error

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "ERROR TO CREATE PERFORMANCE:" + err.Error(),
		})

		return
	}

	c.JSON(200, performance)
}

func EditPerformance(c *gin.Context) {
	db := database.GetDatabase()

	var p models.Performance

	err := c.ShouldBindJSON(&p)
	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "CANNOT BIND JSON: " + err.Error(),
		})
		return
	}

	err = db.Save(&p).Error
	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "CANNOT EDIT PERFORMANCE: " + err.Error(),
		})
		return
	}

	c.JSON(200, p)
}

func DeletePerformance(c *gin.Context) {
	id := c.Param("id")
	convertId, err := strconv.Atoi(id)

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "ID DONT A INTEGER",
		})
		return
	}

	db := database.GetDatabase()

	err = db.Delete(&models.Performance{}, convertId).Error

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "CANNOT DELETE USER: " + err.Error(),
		})
		return
	}

	c.Status(204)
}
