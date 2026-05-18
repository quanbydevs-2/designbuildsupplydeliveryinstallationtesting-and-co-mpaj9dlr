import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { FarmerModule } from "./modules/farmer/farmer.module"
import { CropModule } from "./modules/crop/crop.module"
import { ProgramModule } from "./modules/program/program.module"
import { ResourceModule } from "./modules/resource/resource.module"
import { DistributionModule } from "./modules/distribution/distribution.module"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FarmerModule, CropModule, ProgramModule, ResourceModule, DistributionModule,
  ],
})
export class AppModule {}