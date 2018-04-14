import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FileChooser } from "@ionic-native/file-chooser";
import { FilePath } from "@ionic-native/file-path";
import { Media, MediaObject } from "@ionic-native/media";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  nativePath: string;
  file: MediaObject;

  constructor(
    public navCtrl: NavController,
    private fileChooser: FileChooser,
    // private filePath: FilePath,
    private media: Media
  ) {}
  filechooser() {
    this.fileChooser
      .open()
      .then(uri => {
        (<any>window).FilePath.resolveNativePath(
          uri,
          result => {
            alert("result" + result);
            alert("uri" + uri);
            this.audioPlay(result);
          },
          err => {
            alert(err);
          }
        );
      })
      .catch(e => console.log(e));
  }
  audioPlay(res) {
    this.nativePath = res;
    alert(this.nativePath)
    let pathalone = this.nativePath.substring(8);
    alert("pathalone" + pathalone);
    this.file = this.media.create(pathalone);
    this.file.play();
  }
  playaudio() {
    this.file.play();
  }

  audiostop() {
    this.file.stop();
  }

  audiopause() {
    this.file.pause();
  }
}
