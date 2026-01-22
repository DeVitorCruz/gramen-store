import { Routes } from '@angular/router';
import { FurnitureStore } from './themes/furniture-store/furniture-store.component';

export const routes: Routes = [
    { 
        path: '', 
        component: FurnitureStore,
        children: [
            {
                path: '',
                loadChildren: () => import('./themes/furniture-store/pages/pages.routes')
                    .then((m) => m.PAGES_ROUTES ),
            }
        ]
    }  
];
