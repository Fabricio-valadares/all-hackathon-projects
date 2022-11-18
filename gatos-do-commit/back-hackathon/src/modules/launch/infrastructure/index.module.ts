import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewLaunchCommandHandler } from 'src/modules/launch/infrastructure/commands/new-launch.handler';
import { NewLaunchController } from 'src/modules/launch/infrastructure/controller/newLaunch.controller';
import {
  NewLaunch,
  NewLaunchSchema,
} from 'src/modules/launch/infrastructure/repository/entities/new-launch.entities';
import { NewLaunchMongoRepository } from 'src/modules/launch/infrastructure/repository/new-launch.repository';
import { NewLaunchFactoryService } from 'src/modules/launch/infrastructure/services/new-launch-factory';
import { CqrsModule } from '@nestjs/cqrs';
import { ListLaunchCommandHandler } from 'src/modules/launch/infrastructure/commands/list-launch.launch';
import { DeleteLaunchCommandHandler } from 'src/modules/launch/infrastructure/commands/delete-launch.handle';
import { OnboardingController } from 'src/modules/launch/infrastructure/controller/onboarding.controller';
import { OnboardingHandler } from 'src/modules/launch/infrastructure/commands/onboarding.handler';
import { OnboardingMongoRepository } from 'src/modules/launch/infrastructure/repository/onboarding.repository';
import {
  Onboarding,
  OnboardingSchema,
} from 'src/modules/launch/infrastructure/repository/entities/onboarding.entities';
import {
  Auth,
  AuthSchema,
} from 'src/modules/launch/infrastructure/repository/entities/auth..entites';
import { AuthMongoRepository } from 'src/modules/launch/infrastructure/repository/auth.repository';
import { AuthService } from 'src/modules/launch/infrastructure/services/auth.service';
import { AuthController } from 'src/modules/launch/infrastructure/controller/auth.controller';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: NewLaunch.name,
        schema: NewLaunchSchema,
      },
      {
        name: Onboarding.name,
        schema: OnboardingSchema,
      },
      {
        name: Auth.name,
        schema: AuthSchema,
      },
    ]),
  ],
  controllers: [NewLaunchController, OnboardingController, AuthController],
  providers: [
    NewLaunchMongoRepository,
    OnboardingMongoRepository,
    AuthMongoRepository,
    NewLaunchFactoryService,
    NewLaunchCommandHandler,
    ListLaunchCommandHandler,
    DeleteLaunchCommandHandler,
    OnboardingHandler,
    AuthService,
  ],
})
export class IndexModule {}
