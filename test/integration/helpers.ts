import { getConnection } from 'typeorm'

export async function truncateEntity(entity: { name: string }): Promise<void> {
    const databaseConnection = getConnection()
    const repository = databaseConnection.getRepository(entity.name)
    const metadata = repository.metadata
    await databaseConnection.getRepository(metadata.name).query(`TRUNCATE public.${metadata.tableName} RESTART IDENTITY CASCADE;`)
}

export function gbacToClaims(permissions: string[]): Record<string, 'yes'> {
    return permissions.reduce((claims: Record<string, 'yes'>, p: string): Record<string, 'yes'> => ({
        ...claims,
        [`gbac.${p}`]: 'yes'
    }), {})
}
