import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UsePipes,
  ClassSerializerInterceptor,
  UseGuards,
  Put,
  HttpStatus,
  Query,
} from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { AppValidationPipe } from "@/presentation/validation-pipe";
import { GetUser } from "@/auth/decorator/get.user.decorator";
import { User } from "@prisma/client";
import { JwtGuard } from "@/auth/guard";
import { FindAllTransactionsParams } from "./dto/find-all-transactions.dto";

@Controller("transactions")
@UseInterceptors(ClassSerializerInterceptor)
@UsePipes(AppValidationPipe())
@UseGuards(JwtGuard)
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(
    @GetUser() user: User,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionsService.create(user.id, createTransactionDto);
  }

  @Get()
  findAll(@GetUser() user: User, @Query() options: FindAllTransactionsParams) {
    return this.transactionsService.findAll(user.id, options);
  }

  @Get(":id")
  findOne(@GetUser() user: User, @Param("id") id: string) {
    return this.transactionsService.findOne(user.id, +id);
  }

  @Put(":id")
  update(
    @GetUser() user: User,
    @Param("id") id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(user.id, +id, updateTransactionDto);
  }

  @Delete(":id")
  remove(@GetUser() user: User, @Param("id") id: string) {
    return this.transactionsService.remove(user.id, +id);
  }
}
