import React, { useState } from 'react'


export default function ContactForm(){
const [form, setForm] = useState({name:'', email:'', message:''})
const [status, setStatus] = useState(null)
const [loading, setLoading] = useState(false)


function handleChange(e){
setForm({...form, [e.target.name]: e.target.value})
}


async function handleSubmit(e){
e.preventDefault()
setStatus(null)
if(!form.name || !form.email || !form.message) return setStatus({type:'error', text:'Remplis tous les champs.'})
setLoading(true)
try{
const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
method: 'POST',
headers: {'Content-Type':'application/json'},
body: JSON.stringify(form)
})
const data = await res.json()
if(res.ok){
setStatus({type:'success', text: data.message || 'Message envoyé !'})
setForm({name:'', email:'', message:''})
} else {
setStatus({type:'error', text: data.error || 'Erreur lors de l envoi.'})
}
} catch(err){
setStatus({type:'error', text: 'Erreur réseau.'})
} finally { setLoading(false) }
}


return (
<form onSubmit={handleSubmit} className="space-y-4">
<div>
<label className="block text-sm">Nom</label>
<input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
</div>
<div>
<label className="block text-sm">Email</label>
<input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
</div>
<div>
<label className="block text-sm">Message</label>
<textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 h-32"></textarea>
</div>
<div>
<button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded" disabled={loading}>{loading ? 'Envoi...' : 'Envoyer'}</button>
</div>
{status && <p className={status.type === 'success' ? 'text-green-500' : 'text-red-500'}>{status.text}</p>}
</form>
)
}