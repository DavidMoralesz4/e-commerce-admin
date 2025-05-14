export default function TestCredentialsNotice() {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-4">
      <p className="font-semibold">⚠️ Este es un proyecto de prueba (MVP)</p>
      <p>Usa las siguientes credenciales para ingresar:</p>
      <ul className="mt-2 list-disc list-inside">
        <li><strong>Email:</strong> test01@test.com</li>
        <li><strong>Contraseña:</strong> 12345678</li>
      </ul>
    </div>
  );
}
