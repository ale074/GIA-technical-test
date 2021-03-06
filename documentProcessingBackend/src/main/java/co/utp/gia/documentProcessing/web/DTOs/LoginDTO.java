package co.utp.gia.documentProcessing.web.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {
    private Long id;
    private String email;
    private String password;
    private String token;
}
