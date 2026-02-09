[] {} () --> reference data typees - inme koi bhi change will reflce to parent
let arr : [String,number] = ["aaloo",22];
let a : number, a ki type no. h
let b; -> type -  any
any vs unknown - any me typescript off ho jati hai
---working of ts - 
ts code - > lexer - tokenize th complete code - obvious mistakes -> Parser - creates tree (syntax tree)-> Binder - symbol tables , parent ponter, flow nodes -> Checker - looks for data types- symtax - strict checking -> Emitter - generates js files 