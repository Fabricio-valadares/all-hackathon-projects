package routes

import (
	"bdx3/controllers"

	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
)

func ConfigRoutes(router *gin.Engine) *gin.Engine {
	router.Use(cors.Default())
	main := router.Group("api/v1")

	{
		users := main.Group("user")
		{
			users.POST("/users", controllers.ShowUser)
			users.POST("/user-create", controllers.CreateUser)
			users.PUT("/user", controllers.EditUser)
			users.DELETE("/users/:id", controllers.DeleteUser)
		}
		spends := main.Group("spend")
		{
			spends.GET("/spend", controllers.ShowSpend)
			spends.POST("/show-all-spends", controllers.ShowAllSpends)
			spends.POST("/show-my-spends", controllers.ShowAUserSpends)
			spends.POST("/spend", controllers.CreateSpend)
			spends.PUT("/spend", controllers.EditSpend)
			spends.DELETE("/spend/:id", controllers.DeleteSpend)
		}
		performances := main.Group("performance")
		{
			// performances.GET("/performance", controllers.ShowPerformance)
			performances.POST("/show-my-performance", controllers.ShowAUserPerformance)
			performances.POST("/performance", controllers.CreatePerformance)
			performances.PUT("/performance", controllers.EditPerformance)
			performances.DELETE("/performance/:id", controllers.DeletePerformance)
		}
	}

	return router
}
