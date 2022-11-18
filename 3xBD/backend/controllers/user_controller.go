package controllers

import (
	models "bdx3/Models"
	"bdx3/database"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

func ShowUser(ginContext *gin.Context) {

	db := database.GetDatabase()

	var user []models.User
	var login models.Login

	if login := ginContext.BindJSON(&login); login != nil {
		ginContext.JSON(400, gin.H{
			"ERROR": "ERRO TO GET DATA",
		})
		return
	}

	err := db.Find(&user, "email = ? AND password = ?", login.Email, login.Password).Error

	if err != nil {
		ginContext.JSON(400, gin.H{
			"ERROR": "USER NOT FOUND: " + err.Error(),
		})
		return
	}

	fmt.Println(&user)

	ginContext.JSON(200, &user)

}

func CreateUser(c *gin.Context) {
	db := database.GetDatabase()

	var user models.User

	err := c.ShouldBindJSON(&user)

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "ERROR TO BIND JSON: " + err.Error(),
		})

		return
	}

	err = db.Create(&user).Error

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "ERROR TO CREATE USER:" + err.Error(),
		})

		return
	}

	c.JSON(200, user)
}

func EditUser(c *gin.Context) {
	db := database.GetDatabase()

	var p models.User

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
			"ERROR": "CANNOT EDIT USER: " + err.Error(),
		})
		return
	}

	c.JSON(200, p)
}

func DeleteUser(c *gin.Context) {
	id := c.Param("id")
	convertId, err := strconv.Atoi(id)

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "ID DONT A INTEGER",
		})
		return
	}

	db := database.GetDatabase()

	err = db.Delete(&models.User{}, convertId).Error

	if err != nil {
		c.JSON(400, gin.H{
			"ERROR": "CANNOT DELETE USER: " + err.Error(),
		})
		return
	}

	c.Status(204)
}
