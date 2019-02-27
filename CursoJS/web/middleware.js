//midddleware or chain of responsabilitie

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1';
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2';
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3';

const exec = (ctx, ...middleware) => {
    const execpasso = indice => {
        middleware && indice < middleware.length && middleware[indice](ctx, () => execpasso(indice + 1))
    }
    execpasso(0);
}


const ctx = {}
exec(ctx,passo1,passo2,passo3)

console.log(ctx)