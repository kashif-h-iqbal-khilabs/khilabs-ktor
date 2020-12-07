package main.Dao

import org.jetbrains.exposed.sql.Table


object users : Table("users") {
    val email = varchar("email", 200).nullable()
    val username = varchar("username", 100)
    val password = varchar("password", 100)
    val firstname = varchar("firstname", 100).nullable()
    val lastname = varchar(name = "lastname", length = 100).nullable()
}