import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default async function handler(req, res) {
  const userId = req.query.userid || 'test-user'
  const reward = 0.05

  let { data } = await supabase.from('users').select('*').eq('id', userId).single()

  if (!data) {
    await supabase.from('users').insert({ id: userId, balance: reward })
  } else {
    await supabase.from('users').update({ balance: data.balance + reward }).eq('id', userId)
  }

  res.json({ ok: true, added: reward })
}
