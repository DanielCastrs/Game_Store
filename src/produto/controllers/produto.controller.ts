import { Produto } from 'src/produto/entities/produto.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';

@Controller('/produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Get(`/nome/:nome`)
  @HttpCode(HttpStatus.OK)
  findByAllNome(@Param(`nome`) nome: string): Promise<Produto[]> {
    return this.produtoService.findAllByNome(nome);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  Create(@Body() Produto: Produto): Promise<Produto> {
    return this.produtoService.create(Produto);
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Produto: Produto): Promise<Produto> {
    return this.produtoService.update(Produto);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  }
}
