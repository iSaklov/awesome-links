import { PrismaClient } from '@prisma/client'
import { links } from '../data/links'
const prisma = new PrismaClient()

async function main() {
	const existingUser = await prisma.user.findUnique({
		where: {
			email: 'testemail@gmail.com',
			role: 'ADMIN',
		},
	})

	if (!existingUser) {
		await prisma.user.create({
			data: {
				email: `testemail@gmail.com`,
				role: 'ADMIN',
			},
		})
	}

	await prisma.link.createMany({
		data: links,
		skipDuplicates: true,
	})
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
