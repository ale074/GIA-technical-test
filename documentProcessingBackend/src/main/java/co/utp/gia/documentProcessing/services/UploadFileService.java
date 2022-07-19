package co.utp.gia.documentProcessing.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UploadFileService {
    void saveFile(MultipartFile file) throws IOException;
}
