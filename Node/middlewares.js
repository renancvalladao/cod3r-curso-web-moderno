// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor1 = "mid1"
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2"
    next()
}

const passo3 = ctx => ctx.valor3 = "mid3"

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

/**
 * Na função exec, primeiro é chamado o elemento 0 dos argumentos,
 * no caso o passo 1, sendo passado como next execPasso(1), que então
 * chamará o passo 2 e assim por adiante.
 * execPasso(0) -> passo1() -> execPasso(1) -> passo2() ->
 * execpasso(2) -> passe3()
 */