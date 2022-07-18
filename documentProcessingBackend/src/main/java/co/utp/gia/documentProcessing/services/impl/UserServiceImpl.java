package co.utp.gia.documentProcessing.services.impl;

import co.utp.gia.documentProcessing.model.entities.UserEntity;
import co.utp.gia.documentProcessing.model.repository.UserRepository;
import co.utp.gia.documentProcessing.services.UserService;
import co.utp.gia.documentProcessing.web.DTOs.LoginDTO;
import co.utp.gia.documentProcessing.web.DTOs.UserDTO;
import co.utp.gia.documentProcessing.web.exceptions.BadRequestException;
import co.utp.gia.documentProcessing.web.exceptions.UserNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;


    @Override
    public LoginDTO loginUser(LoginDTO loginDTO) {
        if (!loginDTO.equals(null)) {
            List<UserEntity> userEntities = userRepository.findAll();
            if (userEntities.size() > 0) {
                for (int i = 0; i < userEntities.size(); i++) {
                    boolean emailEquals = userEntities.get(0).getEmail().equals(loginDTO.getEmail());
                    boolean passwordEquals = userEntities.get(i).getCredencialEntity().getPassword().equals(loginDTO.getPassword());
                    if (emailEquals && passwordEquals) {
                        loginDTO.setToken("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");
                        loginDTO.setId(userEntities.get(i).getId());
                        return loginDTO;
                    }
                }

            }
        } else { throw new BadRequestException("User null"); }
        throw new BadRequestException("The email or password does not correspond to that of a registered user ");
    }

    @Override
        public UserDTO findUserById(UserDTO userDTO) {
        if (userRepository.existsById(userDTO.getId())) {
            UserEntity userEntity = this.userRepository.findById(userDTO.getId()).get();
            return modelMapper.map(userRepository.findById(userDTO.getId()).get(), UserDTO.class);
        } else {
            throw new UserNotFoundException("EL usuario no existe");
        }
    }
}
