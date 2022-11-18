import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ListLaunchCommand } from 'src/modules/launch/infrastructure/commands/list-launch-commad';
import { NewLaunchMongoRepository } from 'src/modules/launch/infrastructure/repository/new-launch.repository';

@CommandHandler(ListLaunchCommand)
export class ListLaunchCommandHandler
  implements ICommandHandler<ListLaunchCommand>
{
  constructor(
    @Inject(NewLaunchMongoRepository)
    private readonly launchMongoRepository: NewLaunchMongoRepository,
  ) {}

  async execute(commad: ListLaunchCommand): Promise<any> {
    return await this.launchMongoRepository.findAll(commad.id);
  }
}
