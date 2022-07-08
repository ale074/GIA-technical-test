package co.utp.gia.documentProcessing.services;

import co.utp.gia.documentProcessing.web.DTOs.LoginDTO;

public interface UserService {
    LoginDTO loginUser(LoginDTO loginDTO);
}
