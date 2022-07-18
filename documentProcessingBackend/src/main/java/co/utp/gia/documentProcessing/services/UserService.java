package co.utp.gia.documentProcessing.services;

import co.utp.gia.documentProcessing.web.DTOs.LoginDTO;
import co.utp.gia.documentProcessing.web.DTOs.UserDTO;

public interface UserService {
    LoginDTO loginUser(LoginDTO loginDTO);

    UserDTO findUserById(UserDTO userDTO);
}
