import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {
  
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      title: ['title'],
      items: fb.array([
        fb.group({
          name: fb.control('1'),
          note: fb.control('quux')
        }),
        fb.group({
          name: fb.control('2'),
          note: fb.control('bar')
        }),
        fb.group({
          name: fb.control('3'),
          note: fb.control('baz')
        })         

      ])
    })
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.myForm.get('items').controls, event.previousIndex, event.currentIndex);
    moveItemInArray(this.myForm.get('items').value, event.previousIndex, event.currentIndex);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
    