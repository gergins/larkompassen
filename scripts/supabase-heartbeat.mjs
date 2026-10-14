// Minimal Supabase heartbeat. No writes, no child data, no fake results.
const url=process.env.SUPABASE_URL?.trim();
const key=process.env.SUPABASE_ANON_KEY?.trim();
if (!url || !key) {
  console.log("NOT_CONFIGURED: Missing required Supabase public endpoint configuration. No request sent.");
  process.exit(1);
}
let base;
try {
  base=new URL(url);
  if(base.protocol!=="https:" || !/^[a-z0-9-]+\.supabase\.co$/.test(base.hostname) || base.pathname!=="/") {
    throw new Error("Invalid project URL");
  }
} catch {
  console.error("CONFIG_ERROR: SUPABASE_URL must be the HTTPS project root (*.supabase.co).");
  process.exit(1);
}
const endpoint=new URL("/rest/v1/service_heartbeat?select=id&id=eq.larkompassen&limit=1",base);
try {
 const response=await fetch(endpoint,{headers:{"apikey":key,"Accept":"application/json"},signal:AbortSignal.timeout(12000)});
 if(!response.ok){console.error("UNHEALTHY: database endpoint responded with HTTP "+response.status);process.exitCode=1}
 else {
   const data=await response.json();
   if(Array.isArray(data) && data.length===1 && data[0].id==="larkompassen") console.log("HEALTHY: Supabase returned its non-personal monitoring marker.");
   else {console.error("UNHEALTHY: health marker missing or invalid.");process.exitCode=1}
 }
} catch(e){console.error("UNHEALTHY: endpoint unavailable or response invalid ("+(e?.name==="TimeoutError"?"timeout":"request error")+").");process.exitCode=1}
