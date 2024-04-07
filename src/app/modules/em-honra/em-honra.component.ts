import { Component } from '@angular/core';
import { ImageLoaderService } from 'src/app/services/image.service';

@Component({
  selector: 'tcv-em-honra',
  templateUrl: './em-honra.component.html',
  styleUrls: ['./em-honra.component.scss']
})
export class EmHonraComponent {
  isLoading = true
constructor(  private imageService:ImageLoaderService
  ){
    this.loadingService()
  }

  loadingService(){
    this.imageService.waitForImagesToLoad().subscribe(()=>{
      this.isLoading = false
    })

    let loadSubBreaking = this.imageService.timeBreakingImages(500).subscribe(n => {
    if(n === 1){
      this.isLoading = false
      loadSubBreaking.unsubscribe()
    }
  })
}

}
