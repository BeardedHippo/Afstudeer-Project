import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Routes
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/task/task.component';
import { BoardroomComponent } from './pages/boardroom/boardroom.component';
import { CreateNewClassComponent } from './pages/create-new-class/create-new-class.component';
import { DifficultySelectionComponent } from './pages/difficulty-selection/difficulty-selection.component';
import { SelectClassComponent } from './pages/select-class/select-class.component';
import { ScoreboardComponent } from './pages/scoreboard/scoreboard.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { ManageGroupsComponent } from './pages/manage-groups/manage-groups.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'moeilijkheid', component: DifficultySelectionComponent },
  { path: 'bestaande-klas', component: SelectClassComponent },
  { path: 'nieuwe-klas', component: CreateNewClassComponent },
  { path: 'boardroom', component: BoardroomComponent },
  { path: 'taken/:id', component: TaskComponent },
  { path: 'scores', component: ScoreboardComponent },
  { path: 'uitleg', component: TutorialComponent },
  { path: 'beheer-groepen', component: ManageGroupsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
  constructor() {}
}