import { Controller, Get, Post, Put, Delete, Param, Body, Query } from "@nestjs/common"
import { FarmerService } from "./farmer.service"

@Controller("farmer")
export class FarmerController {
  constructor(private readonly svc: FarmerService) {}

  @Get()
  findAll(
    @Query("search") search?: string,
    @Query("status") status?: string,
    @Query("page") page = "1",
    @Query("limit") limit = "20",
  ) {
    return this.svc.findAll({ search, status, page: +page, limit: +limit })
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.svc.findOne(+id)
  }

  @Post()
  create(@Body() data: any) {
    return this.svc.create(data)
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() data: any) {
    return this.svc.update(+id, data)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.svc.remove(+id)
  }
}