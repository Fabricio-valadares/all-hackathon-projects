package server

import (
	"bdx3/routes"
	"log"

	"github.com/gin-gonic/gin"
)

type Server struct {
	port   string
	server *gin.Engine
}

func NewServer() Server {
	return Server{
		port:   "5000",
		server: gin.Default(),
	}
}

func (runServer *Server) Run() {
	router := routes.ConfigRoutes(runServer.server)

	log.Print("Server is running on port: ", runServer.port)

	log.Fatal(router.Run(":" + runServer.port))
}
