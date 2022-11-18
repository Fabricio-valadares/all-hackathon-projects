package models

type Login struct {
	Email    string `json: "nickname"`
	Password string `json: "password"`
}
