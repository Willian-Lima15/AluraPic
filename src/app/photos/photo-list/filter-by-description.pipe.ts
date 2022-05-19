import { Pipe, PipeTransform } from '@angular/core';
import { PhotosModel } from 'src/app/shared/models/photos.model';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: PhotosModel[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery
    .trim()
    .toLowerCase();

    if(descriptionQuery){
      return photos.filter(photo =>
         photo.description.toLowerCase().includes(descriptionQuery))
    } else {
      return photos;
    }
  }

}
