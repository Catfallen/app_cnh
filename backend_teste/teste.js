const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const usuario = await prisma.usuario.create({
    data: {
      nome: 'Teste',
      email: 'teste@email.com',
      senha:'123'
    }
  });

  console.log(usuario);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
