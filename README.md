# SelectiviCAT

Repositori d'exàmens de selectivitat de Catalunya amb solucions i recursos per a estudiants.

## Tecnologies

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- NextAuth.js
- MongoDB
- Mongoose
- SWR

## Requisits

- Node.js 18.17 o superior
- MongoDB

## Instal·lació

1. Clona el repositori:
```bash
git clone https://github.com/yourusername/selectivicat.git
cd selectivicat
```

2. Instal·la les dependències:
```bash
npm install
```

3. Crea un arxiu `.env.local` a l'arrel del projecte amb les següents variables:
```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Inicia el servidor de desenvolupament:
```bash
npm run dev
```

5. Obre [http://localhost:3000](http://localhost:3000) al teu navegador.

## Estructura del Projecte

```
src/
├── app/              # Pàgines i layouts de Next.js
├── components/       # Components reutilitzables
├── lib/             # Configuracions i utilitats
├── models/          # Models de Mongoose
├── styles/          # Estils globals
└── utils/           # Funcions utilitàries
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desenvolupament
- `npm run build`: Crea la versió de producció
- `npm start`: Inicia el servidor de producció
- `npm run lint`: Executa el linter

## Contribuir

Les contribucions són benvingudes! Si us plau, llegeix les nostres [guies de contribució](CONTRIBUTING.md) abans d'enviar un pull request.

## Llicència

Aquest projecte està sota la llicència MIT. Vegeu l'arxiu [LICENSE](LICENSE) per més detalls. 