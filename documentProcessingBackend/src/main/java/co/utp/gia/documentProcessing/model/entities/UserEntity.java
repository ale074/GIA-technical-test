package co.utp.gia.documentProcessing.model.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
@Builder
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "OCCUPATION")
    private String occupation;
    @Column(name = "STAMP")
    private String stamp;
    @Column(name = "PHONE")
    private String phone;
    @Column(name = "EMAIL")
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "credencial_id", referencedColumnName = "id")
    private CredencialEntity credencialEntity;


}
