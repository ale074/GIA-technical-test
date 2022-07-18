import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {

  stamp: string;
  time: string;
  name: string;
  uniqueSignatureCode = '';
  constructor(
    private readonly router: Router ,
    private userService: UserService) { }

  ngOnInit(): void {
  }
  showDocuments: boolean = false;
  showSignatureOptions: boolean = false;
  showTimeAndName: boolean = false;
  showstamp: boolean = false;
  showUniqueSignatureCode: boolean = false;

  public makeDocument() {
    this.showDocuments = true;
    this.showSignatureOptions = true;
  }

  public signWithStamp() {
    this.showSignatureOptions = false ;
    this.showstamp = true ;
    this.getImage();
  }
  public signWithStampTimeAndName() {
    this.showSignatureOptions = false ;
    this.showTimeAndName = true ;
    this.showstamp = true ;
    this.getImage();
    const timeTemp = new Date();
    this.time = timeTemp.toLocaleString('en-US', { hour: 'numeric', hour12: true })
  }
  public addUniqueSignatureCode() {
    this.showSignatureOptions = false ;
    this.showTimeAndName = false ;
    this.showstamp = false ;
    this.showUniqueSignatureCode = true ;
    this.getImage();
    const timeTemp = new Date();
    this.time = timeTemp.toLocaleString('en-US', { hour: 'numeric', hour12: true })
  }

  async getImage() {
    const uid = sessionStorage.getItem('uid')
    if (uid) {
      const result = await this.userService.findUserById(uid?uid:'') as {stamp: string, name: string};
      if (result) {
        this.stamp = result.stamp;
        this.name = result.name;
      }
    } else {
      localStorage.clear();
      sessionStorage.clear();
      this.redirectLogin()
    }
    
  }

  public redirectLogin(): void {
    this.router.navigateByUrl('/login');
  }


}
