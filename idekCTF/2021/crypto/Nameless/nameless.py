#!/usr/bin/env python3

from Crypto.Util.number import getPrime, bytes_to_long

flag = bytes_to_long(open("flag.txt", "rb").read())

p = getPrime(1024)
q = getPrime(1024)

n = p*q
e = 65537

c = pow(flag, e, n)

print(f"{n = }")
print(f"{p**2 + q**2 = }")
print(f"{c = }")

# n = 17039353907577304435335064263404014554877715060984532599266619880863167873378099082282744647069063737519071263364836126585022715467571812084451441982393173641398961475914685815327955647115633127041896154455593434072255425400800779717723399468604805292082232853055652824142503280033249169812067036520117578584094798348819948005306782099055133323817492597665553443090585282100292603079932759878536941929823231580881942192749039900111873581375554659251791337260557811529597205007196563571790350676229812320194120553090511341491088451472118285832059742983329898372623700182290118257197824687682775782009980169859003817731
# p**2 + q**2 = 34254734236141177160574679812056859631858427160408786991475995766265871545173190051194038767461225382849521482292062983459474860288453334280315736001800236347672807900333594896297515619502911996316514299218938831378736595562870019767614772735193898275208842936903810908125651716713945099823849942766283224215669363078687494444967371294251548767512167452469907361824731739495988324619487099803563636546009036759134670516039262088500254966964852889263176272377467365967151127628965809347292638988052064278479647751273833336918088826074446862207626964731876317800211831559603043730904022957158490478667914769698472788362
# c = 12870370380105677159569686874593314643716517767455659912764832987663831817849402722874771360315463499459803247514426078866675686952348433836656840934671927466173330528381359767745015167610939855705805470288376941237662107279159556248387485524451540986787953598577323572841487131458590546170321983597795128547549803960136942090569419458036728363613060710384550676895546741408072019046530957103700345379626982758919062223712005709765751343132802610106335253368313457365776378662756844353849622352138042802036310704545247436297860319183507369367717753569233726139626694256257605892684852784606001755037052492614845787835
