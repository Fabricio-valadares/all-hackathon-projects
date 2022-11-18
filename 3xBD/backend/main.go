package main

import (
	"bdx3/database"
	"bdx3/server"
)

func main() {

	database.OpenDatabase()

	runServer := server.NewServer()

	runServer.Run()
}
