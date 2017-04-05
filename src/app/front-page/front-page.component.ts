import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [ProjectService]
})
export class FrontPageComponent implements OnInit {
  projects;
  filterByFunding = "allProjects";

  constructor(private router: Router, private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.projects = dataLastEmittedFromObserver;
      console.log(this.projects);
    });
    // this.projects = this.projectService.getProjects();
  }

  goToProject(id){
    this.router.navigate(['project-detail', id]);
  }

  onChange(optionFromMenu) {
    this.filterByFunding = optionFromMenu;
  }

}
