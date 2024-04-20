import { Controller, Get } from '@nestjs/common';
import { DiskHealthIndicator, HealthCheck, HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        // private http: HttpHealthIndicator,
        // private db: TypeOrmHealthIndicator,
        // private disk: DiskHealthIndicator
    ){}

    @Get()
    @HealthCheck()
    check(){
        return this.health.check([
            // ()=> this.http.pingCheck("nestjs-docs","https://docs.nestjs.com")
            // ()=> this.http.responseCheck("nestjs-docs","https://docs.nestjs.com",(res)=>res.status===200)
            // ()=> this.db.pingCheck("database")
        ])
    }
}
