package co.utp.gia.documentProcessing.services.impl;

import co.utp.gia.documentProcessing.services.UploadFileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class UploadFileServiceImpl implements UploadFileService {

    private String uploadFolder = ".//src//main//resources//files//";
    @Override
    public void saveFile(MultipartFile file) throws IOException {
        if (!file.isEmpty()){
            byte[] bytes = file.getBytes();
            Path path = Paths.get(uploadFolder + file.getOriginalFilename());
            Files.write(path, bytes);
        }

    }
}
