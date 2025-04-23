type Mods = Record<string, boolean | string>



export function className(cls: string, mods: Mods, additional:string[]): string {
   return [
        cls,
       ...additional,
       ...Object.entries(mods)
           .filter(([className, value]) => Boolean(value))
           .map(([className]) => className),
   ].join(' ')
}

className('remove-btn', { hovered: true, selectable: true, red: true }, ['pdg'])