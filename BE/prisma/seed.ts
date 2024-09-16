import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'testuser@example.com',
      password: 'securepassword123',
      name: 'Test User',
      pages: {
        create: [
          {
            title: 'First Page',
            blocks: {
              create: [
                {
                  type: 'TEXT',
                  content: 'This is the first block of the first page.',
                },
                {
                  type: 'HEADING',
                  content: 'A heading block',
                },
              ],
            },
          },
          {
            title: 'Second Page',
            blocks: {
              create: [
                {
                  type: 'TEXT',
                  content: 'This is the first block of the second page.',
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log(`Created user with ID: ${user.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
