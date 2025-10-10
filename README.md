# nfce-nfe-node-editado
Algumas melhorias na lib, pois estas mudanças não são implementadas na original.

# Lista de mudanças
- Passa a enviar o autXML;
- Corrigido campos da transportadora para NFe, de uf para UF e ie para IE;
- Geração de DANFe e cupom de NFC-e corrigido a hora de emissão, invez de converter o GMT para a data computador, agora ele converte do proprio GMT, não tornando a hora errada, tornando possivel o mesmo computador emitir para dois estados cujo o fuso-horario são diferentes como SP e MS por exemplo.
