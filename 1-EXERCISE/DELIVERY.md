## Entrega

### Design system

Dentro pasta `delivery/assets/css` foi desenvolvido dois arquivos, **color.ts** e **typography.ts**. 

O Primeiro `color.ts` teve como referencia o arquivo Cores.jpg, assim nele contem todas as cores e seus respectivos nomes. 
Para sua utilização devemos importar o arquivo `color.ts` no local onde gostaríamos de usar uma cor e em seguida chamar instanciar a mesma
usando ${color.CORDESEJADA}. Ver exemplo abaixo:

```
import { color } from 'assets/css/color';
import { typography } from '../../../assets/css/typography';

background-color: ${color.magenta};
color: ${color.gold};
```

O Segundo `typography.ts` teve como referencia o arquivo Tipografia.jpg, assim nele contem todas as informações das fontes como *size*, *weight* e o *font-family*.
Para sua utilização devemos importar o arquivo `typography.ts` no local onde gostaríamos de usar alguma das propriedades acima instanciando usando ${typography.PROPRIEDADE.DEFINIÇÃO}. Ver exemplo abaixo:

```

import { typography } from 'assets/css/typography';

font-family: ${typography.type.primary};
font-weight: ${typography.weight.regular};
font-size: ${typography.size.body};
```

