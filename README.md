O que e Recoil : e uma biblioteca de gerenciamento de estado para aplicações feitas em React

Os Principais conceitos e funções basicas:

atom: sao pequenas unidades de estado, ele possui uma chave unica e valor default

useRecoilValue: Usamos esse hook quando pretendemos apenas acessar o atomo, permite acessar e alterar o valor do atomo

Selectors : Selectors sao funções puras que acessam atomos e permitem modificar o estado sem ter que recriar o estado

RecoilRoot: A proposta do Recoil e ter um unico componente RecoilRoot na raiz da aplicação e de baixo dele ter os átomos que são
estados manipulados por funções pura , chamdas de seletores nos componentes. O estado é utilizado pelo componente, mas não pertence
ao componente. Isso o torna bastante escalável para que outros utilizem e modifiquem o estado conforme sua necessidade ou até mesmo
seja transformado.

##English
What is Recoil : and a state management library for applications made in React

The main concepts and basic functions:

atom: are small state units, it has a unique key and default value

useRecoilValue: We use this hook when we only intend to access the atom, it allows accessing and changing the atom's value

Selectors : Selectors are pure functions that access atoms and allow you to modify the state without having to recreate the state.

RecoilRoot: The Recoil proposal is to have a single RecoilRoot component at the root of the application and under it have the atoms that are
states handled by pure functions, called selectors on components. The state is used by the component, but does not belong
to the component. This makes it quite scalable for others to use and modify the state as per their need or even
be transformed.
