import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { BalanceComponent } from './balance.component';
import { GolfService } from '../../golf/golf.service';
import { PlayersService } from '../../golf/players.service';

describe('BalanceComponent', () => {
    let component: BalanceComponent;
    let fixture: ComponentFixture<BalanceComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                SharedModule,
                GolfModule],
            declarations: [
                BalanceComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BalanceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
