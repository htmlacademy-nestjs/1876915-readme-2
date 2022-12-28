import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.publication.upsert({
    where: { id: 1 },
    update: {},
    create: {
      originalId: 1,
      userId: 'userId#1',
      originalUserId: 'userId#1',
      type: 'Link',
      content: {
        link: 'wwww.someVideoLink.com',
        linkDescription: 'This is a non-existent link to a non-existent video',
      },
      comments: {
        create: [
          {
            userId: 'userId#1',
            content: "This comment from user #1 for publication #1"
          },
          {
            userId: 'userId#2',
            content: "This comment from user #2 for publication #1"
          }
        ]
      },
      tags: {
        create: [
          {
            name: 'someTag#1',
          },
          {
            name: 'someTag#2',
          }
        ]
      }
    }
  });
  await prisma.publication.upsert({
    where: { id: 2 },
    update: {},
    create: {
      originalId: 2,
      userId: 'userId#2',
      originalUserId: 'userId#2',
      type: 'Text',
      content: {
        title: 'This is the title for Text publication',
        announcement: 'This is an announcement for Text publication',
        text: 'This is the content for Text publication',
      },
      comments: {
        create: [
          {
            userId: 'userId#1',
            content: "This comment from user #1 for publication #2"
          },
          {
            userId: 'userId#2',
            content: "This comment from user #2 for publication #2"
          }
        ]
      },
      tags: {
        create: [
          {
            name: 'someTag#3',
          },
          {
            name: 'someTag#4',
          }
        ]
      }
    }
  });
  await prisma.publication.upsert({
    where: { id: 3 },
    update: {},
    create: {
      originalId: 3,
      userId: 'userId#3',
      originalUserId: 'userId#3',
      type: 'Quote',
      content: {
        quote: 'This is the content for Quote publication',
        quoteAuthor: 'John Doe',
      },
      comments: {
        create: [
          {
            userId: 'userId#3',
            content: "This comment from user #3 for publication #3"
          },
          {
            userId: 'userId#4',
            content: "This comment from user #4 for publication #3"
          }
        ]
      },
      tags: {
        create: [
          {
            name: 'someTag#5',
          },
          {
            name: 'someTag#6',
          }
        ]
      }
    }
  });
  console.info('🤘️ Database was filled');
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
