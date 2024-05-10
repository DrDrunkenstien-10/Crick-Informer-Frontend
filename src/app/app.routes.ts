import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { LiveComponent } from '../app/pages/live/live.component';
import { PointsTableComponent } from '../app/pages/points-table/points-table.component';
import { HistoryComponent } from '../app/pages/history/history.component';

export const routes: Routes = [

    {
        path: "home",
        component: HomeComponent,
        title: "Home | Cricinformer"
    },
    {
        path: "live",
        component: LiveComponent,
        title: "Live Matches | Cricinformer"
    },
    {
        path: "points-table",
        component: PointsTableComponent,
        title: "Points-Table | Cricinformer"
    },
    {
        path: "history",
        component: HistoryComponent,
        title: "Match History | Cricinformer"
    }
];
