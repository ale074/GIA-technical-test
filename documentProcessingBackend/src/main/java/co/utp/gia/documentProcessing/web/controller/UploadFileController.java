package co.utp.gia.documentProcessing.web.controller;

import co.utp.gia.documentProcessing.services.UploadFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
public class UploadFileController {

    @Autowired
    private UploadFileService uploadFileService;

    @PostMapping("uploadFile")
    public ResponseEntity<?> uploadFile(@RequestParam("file")MultipartFile file){
        if (file.isEmpty()) {
            return new ResponseEntity<Object>("Select a file", HttpStatus.OK);
        }

        try {
            uploadFileService.saveFile(file);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return new ResponseEntity<Object>("File uploaded successfully", HttpStatus.OK);
    }

}
