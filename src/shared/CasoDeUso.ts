export default interface CasoDeUso<IN, OUT> {
  execute(input: IN): Promise<OUT>;
}
