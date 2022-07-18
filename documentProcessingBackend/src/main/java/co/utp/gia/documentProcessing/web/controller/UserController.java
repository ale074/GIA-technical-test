package co.utp.gia.documentProcessing.web.controller;

import co.utp.gia.documentProcessing.services.UserService;
import co.utp.gia.documentProcessing.web.DTOs.LoginDTO;
import co.utp.gia.documentProcessing.web.DTOs.UserDTO;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
@NoArgsConstructor
public class UserController {

    @Autowired
    private UserService UserService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("loginUser")
    public LoginDTO loginUser(@RequestBody LoginDTO loginDTO) { return UserService.loginUser(loginDTO);}

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("findUserById")
    public UserDTO findUserById(@RequestBody UserDTO userDTO) { return UserService.findUserById(userDTO);}
}
