// Dependendo de bun ou node, adapte a forma de recuperar o env, sempre atualize isso quando adicionar uma env nova, porque se nao nao adianta ne 
const env = {
  SUPABASE_URL:              Bun.env.SUPABASE_URL!,
  SUPABASE_SERVICE_ROLE_KEY: Bun.env.SUPABASE_SERVICE_ROLE_KEY!,
  PORT:                      Bun.env.PORT ?? '3001',
}

// Valida na inicialização — explode cedo se faltar algo
for (const [key, value] of Object.entries(env)) {
  if (!value) throw new Error(`Missing env variable: ${key}`)
}

export default env
